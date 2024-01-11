import { Client } from "@notionhq/client";
// import dotenv from "dotenv";
// dotenv.config();

const notion = new Client({ auth: import.meta.env.VITE_NOTION_API_KEY });
const databaseDevocionais = import.meta.env.VITE_NOTION_DATABASE_ID;

function buildObjResponse(properties) {
    const response = {};
    for (const key in properties) {
        const obj = properties[key];

        const { type } = obj;
        const value = obj[type][0].plain_text;

        response[key] = value;
    }
    return response;
}

export async function getDevocionais() {
  const resultado = await notion.databases.query({
    database_id: databaseDevocionais,
  });
  console.log(resultado)
  const resposta = buildObjResponse(resultado.results);
  return resposta;
}
