import { createClient } from "@supabase/supabase-js";
import { CONFIG } from "./config.js";

const supabase = createClient(
    CONFIG.SUPABASE_URL,
    CONFIG.SUPABASE_KEY );

export async function getOpenItems() {
    const { data, error } = await supabase
        .from("crawl_queue")
        .select("item, brand")
        .eq("status", "Open")
        .order("item");
    if (error) { throw error; }
    return data; }

export { supabase };