import { getOpenItems } from "./supabase.js";

import { findImage as findRoco } from "./lib/roco.js";

import { findImage as findFlm } from "./lib/flm.js";

async function main() {

    const items = await getOpenItems();

    if (items.length === 0) {

        console.log("Queue Empty");

        return;

    }

    const item = items[0];

    console.log("---------------------");

    console.log("Item :", item.item);

    console.log("Brand:", item.brand);

    console.log("---------------------");

    let image;

    if (item.brand === "ROCO") {

        image = await findRoco(item.item);

    } else {

        image = await findFlm(item.item);

    }

    if (image) {

        console.log();

        console.log("IMAGE FOUND");

        console.log(image);

    } else {

        console.log();

        console.log("IMAGE NOT FOUND");

    }

}

main().catch(console.error);