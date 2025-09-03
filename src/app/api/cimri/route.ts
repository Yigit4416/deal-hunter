import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export async function GET() {
  console.log("Puppeteer POST request API route started.");
  let browserInstance: puppeteer.Browser | null = null;

  try {
    // Tarayıcıyı Vercel gibi sunucusuz ortamlar için uygun seçeneklerle başlatıyoruz.
    const options = {
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    };

    console.log("Launching browser...");
    browserInstance = await puppeteer.launch(options);

    const page = await browserInstance.newPage();
    console.log("New page created.");

    // POST isteğini yapmadan önce, isteğin doğru origin'den (kaynaktan) gelmesi için
    // ana sayfaya gidiyoruz. Bu, CORS ve diğer güvenlik kontrollerini geçmek için önemlidir.
    console.log("Navigating to Cimri homepage to establish context...");
    await page.goto("https://www.cimri.com", { waitUntil: "domcontentloaded" });

    // Hedef API URL'si ve göndermek istediğiniz payload
    const apiUrl = "https://www.cimri.com/api/cimri";
    const payload = {
      queryName: "infiniteScrollSearchQuery",
      variables: {
        filters: "",
        criterias: "",
        categoryId: null,
        keyword: "bilgisayar",
        page: 2, // Sayfa 2'yi istiyoruz
        sort: "rank,desc",
      },
      platform: "CIMRI_DESKTOP_V2",
    };

    console.log("Executing fetch request from within the browser context...");

    // page.evaluate kullanarak tarayıcının kendi içinden fetch isteğini yapıyoruz.
    // Bu, en gerçekçi senaryoyu simüle eder.
    const result = await page.evaluate(
      async (url: string | URL | Request, postPayload: any) => {
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postPayload),
          });

          if (!response.ok) {
            // Tarayıcı içerisinden hata detaylarını Node.js tarafına döndürüyoruz.
            return {
              error: `API request failed with status ${response.status}`,
            };
          }
          return await response.json();
        } catch (e: any) {
          return { error: e.message };
        }
      },
      apiUrl, // 1. argüman (url)
      payload, // 2. argüman (postPayload)
    );

    // Tarayıcıdan bir hata nesnesi döndüyse, bu hatayı sunucu tarafında fırlat.
    if (result && result.error) {
      throw new Error(`Browser context error: ${result.error}`);
    }

    console.log("Data fetched successfully.");
    return NextResponse.json(result.data.search.products);
  } catch (error) {
    console.error("Puppeteer operation failed:", error);
    return NextResponse.json(
      {
        message: "Veri çekme işlemi sırasında bir hata oluştu.",
        error: (error as Error).message,
      },
      { status: 500 },
    );
  } finally {
    // Ne olursa olsun tarayıcıyı kapatarak kaynakları serbest bırakıyoruz.
    if (browserInstance) {
      console.log("Closing browser.");
      await browserInstance.close();
    }
  }
}
