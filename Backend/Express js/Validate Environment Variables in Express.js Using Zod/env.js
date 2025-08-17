// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);

//more better way:
//to install zod : npm i zod
// import { z, ZodError } from "zod";

// const ageSchema = z.number().min(18).max(100).int();
// const userAge = 19;
// const parseUserAge = ageSchema.parse(userAge);
// const { data, error, success } = ageSchema.safeParse(userAge);
// console.log(parseUserAge);
// try {
//   const parseUserAge = ageSchema.parse(userAge);
//   console.log(parseUserAge); //success case
// } catch (error) {
//   //instanceof is a javascript operator used  to check if an object  is an  instance of a specific class or constructor.
//   if (error instanceof ZodError) {
//     console.log(error.issues[0].message); //Display error message only
//   } else {
//     console.log("Unexpected error:", error);
//   }
// }

import { z } from "zod";

const portSchema = z.coerce.number().min(1).max(65535).default(3000);
export const PORT = portSchema.parse(process.env.PORT);
