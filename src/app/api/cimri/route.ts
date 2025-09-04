import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import { upsertProducts } from "@/server/queries"; // senin proje yapına göre ayarla

export async function GET() {
  let browserInstance: puppeteer.Browser | null = null;

  try {
    const options = {
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    };

    browserInstance = await puppeteer.launch(options);
    const page = await browserInstance.newPage();
    await page.goto("https://www.cimri.com", { waitUntil: "domcontentloaded" });

    const apiUrl = "https://www.cimri.com/api/cimri";
    const payload = {
      queryName: "infiniteScrollSearchQuery",
      variables: {
        filters: "",
        criterias: "",
        categoryId: null,
        keyword: "bilgisayar",
        page: 2,
        sort: "rank,desc",
      },
      platform: "CIMRI_DESKTOP_V2",
    };

    const result = await page.evaluate(
      async (url, postPayload) => {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postPayload),
        });
        if (!response.ok) {
          return { error: `status ${response.status}` };
        }
        return await response.json();
      },
      apiUrl,
      payload,
    );

    if (result && result.error) {
      throw new Error(result.error);
    }

    const products = result.data.search.products;

    await upsertProducts(products);

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  } finally {
    if (browserInstance) {
      await browserInstance.close();
    }
  }
}
