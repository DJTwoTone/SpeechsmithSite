import { column, defineDb, defineTable } from "astro:db";

const BlogArticle = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        title: column.text(),
        author: column.text(),
        published: column.date(),
        headingImg: column.text(),
        

    }
})







export default defineDb({
    tables: {

    },
})