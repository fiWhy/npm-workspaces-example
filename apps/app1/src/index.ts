import { echo } from "@my/shared";
import { test } from "@/libs/abc.js";
import clsx from "classnames";

export const main = () => {
  console.log('HI!', clsx({
    'a': true,
    'a-b': true
  }))
  echo("ABC");
  test("ABC");
};

main();
