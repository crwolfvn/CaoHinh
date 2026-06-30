export async function findImage(item) {

    const searchUrl =
        "https://www.roco.cc/rde/catalogsearch/result/?q=" +
        encodeURIComponent(item);

    console.log("Search:", searchUrl);

    const response = await fetch(searchUrl, {
        headers: {
            "User-Agent":
                "Mozilla/5.0"
        }
    });

    if (!response.ok) {

        throw new Error(
            `HTTP ${response.status}`
        );

    }

    const html = await response.text();

    // Không có kết quả

    if (
        html.includes("Ihre Suche ergab keine Ergebnisse")
    ) {

        return null;

    }

    // Tìm URL responsebinary

    const match = html.match(
        /https:\/\/www\.roco\.cc\/responsebinary\.php[^"' ]+/i
    );

    if (!match) {

        return null;

    }

    return match[0];

}