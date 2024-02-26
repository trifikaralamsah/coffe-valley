import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { addProduct } from "@/lib/firebase/services";

export const POST = async (req: any) => {
  const formData = await req.formData();
  console.log(formData.get("name"));
  console.log(formData.get("price"));
  console.log(formData.get("file"));

  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replaceAll(" ", "_");
  console.log(filename);
  try {
    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );

    // add product new
    await addProduct({
      name: formData.get("name"),
      image: "/uploads/" + filename,
      price: Number(formData.get("price")),
    });

    return NextResponse.json({ Message: "Success", status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};
