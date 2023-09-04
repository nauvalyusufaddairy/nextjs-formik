"use client";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import {
  FaUnderline,
  FaTextWidth,
  FaSuperscript,
  FaSubscript,
  FaStrikethrough,
  FaQuoteRight,
  FaListUl,
  FaAlignCenter,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaChevronDown,
  FaChevronUp,
  FaCode,
  FaHighlighter,
  FaItalic,
  FaListOl,
} from "react-icons/fa";
import { MdOutlineFormatClear } from "react-icons/md";
import { VscClearAll } from "react-icons/vsc";
import { BiFontFamily, BiParagraph } from "react-icons/bi";
import { BsCodeSlash, BsBlockquoteLeft } from "react-icons/bs";
import { GoHorizontalRule } from "react-icons/go";
import { ImPageBreak } from "react-icons/im";

import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
  LuHeading6,
  LuRedo,
  LuUndo,
} from "react-icons/lu";

import TextStyle from "@tiptap/extension-text-style";
import {
  Editor,
  EditorContent,
  EditorContentProps,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BulletList from "@tiptap/extension-bullet-list";

import React from "react";

const MenuBar = ({ editor }: { editor: Editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="flex flex-row flex-wrap space-x-2 border-[1px] border-dashed border-gray-800 p-[10px] mb-[32px]">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={` px-[5px] py-[1px] rounded-sm hover:bg-teal-500 hover:text-white  ${
            editor.isActive("bold") ? "bg-gray-800/80 text-white" : ""
          }`}
        >
          <FaBold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={` px-[5px] py-[1px] rounded-sm  hover:bg-teal-500 hover:text-white  ${
            editor.isActive("italic") ? "bg-gray-800/80 text-white" : ""
          }`}
        >
          <FaItalic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`  px-[5px] py-[1px] rounded-sm   hover:bg-teal-500 hover:text-white  ${
            editor.isActive("strike") ? "bg-gray-800/80 text-white" : ""
          }`}
        >
          <FaStrikethrough />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={` px-[5px] py-[1px] rounded-sm  hover:bg-teal-500 hover:text-white  ${
            editor.isActive("code") ? "bg-gray-800/80 text-white" : ""
          }`}
        >
          <FaCode className="w-[21px] h-[21px] " />
        </button>
        <button
          className=" hover:bg-teal-500 hover:text-white "
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
        >
          <MdOutlineFormatClear className="w-[22px] h-[22px]" />
        </button>
        <button
          className=" hover:bg-teal-500 hover:text-white "
          onClick={() => editor.chain().focus().clearNodes().run()}
        >
          <VscClearAll className="w-[22px] h-[22px] font-bold" />
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={` px-[5px] py-[1px] rounded-sm  hover:bg-teal-500 hover:text-white  ${
            editor.isActive("paragraph") ? "bg-gray-800/80 text-white" : ""
          }`}
        >
          <BiParagraph className="w-[22px] h-[22px]" />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={` px-[5px] py-[1px] rounded-sm  hover:bg-teal-500 hover:text-white   ${
            editor.isActive("heading", { level: 1 })
              ? "bg-gray-800/80 text-white"
              : ""
          }`}
        >
          <LuHeading1 className="w-[22px] h-[22px]" />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={` px-[5px] py-[1px] rounded-sm  hover:bg-teal-500 hover:text-white  ${
            editor.isActive("heading", { level: 2 })
              ? "bg-gray-800/80 text-white"
              : ""
          }`}
        >
          <LuHeading2 className="w-[22px] h-[22px]" />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={` px-[5px] py-[1px] rounded-sm   hover:bg-teal-500 hover:text-white ${
            editor.isActive("heading", { level: 3 })
              ? "bg-gray-800/80 text-white"
              : ""
          }`}
        >
          <LuHeading3 className="w-[22px] h-[22px]" />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={` px-[5px] py-[1px] rounded-sm  hover:bg-teal-500 hover:text-white   ${
            editor.isActive("heading", { level: 4 })
              ? "bg-gray-800/80 text-white"
              : ""
          }`}
        >
          <LuHeading4 className="w-[22px] h-[22px]" />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={` px-[5px] py-[1px] rounded-sm   hover:bg-teal-500 hover:text-white  ${
            editor.isActive("heading", { level: 5 })
              ? "bg-gray-800/80 text-white"
              : ""
          }`}
        >
          {/* <LuHeading5 className="w-[22px] h-[22px]" />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={` px-[5px] py-[1px] rounded-sm  hover:bg-teal-500 hover:text-white  ${
            editor.isActive("heading", { level: 6 })
              ? "bg-gray-800/80 text-white"
              : ""
          }`}
        >
          <LuHeading6 className="w-[22px] h-[22px]" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={` px-[5px] py-[1px] rounded-sm   hover:bg-teal-500 hover:text-white ${
            editor.isActive("bulletList") ? "bg-gray-800/80 text-white" : ""
          }`}
        > */}
          <FaListUl className="w-[18px] h-[18px]" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={` px-[5px] py-[1px] rounded-sm  hover:bg-teal-500 hover:text-white   ${
            editor.isActive("orderedList") ? "bg-gray-800/80 text-white" : ""
          }`}
        >
          <FaListOl className="w-[18.5px] h-[18.5px]" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={` px-[5px] py-[1px] rounded-sm  hover:bg-teal-500 hover:text-white  ${
            editor.isActive("codeBlock") ? "bg-gray-800/80 text-white" : ""
          }`}
        >
          <BsCodeSlash className="w-[18.5px] h-[18.5px]" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={` px-[5px] py-[1px] rounded-sm  hover:bg-teal-500 hover:text-white   ${
            editor.isActive("blockquote") ? "bg-gray-800/80 text-white" : ""
          }`}
        >
          <BsBlockquoteLeft className="w-[22px] h-[22px]" />
        </button>
        <button
          className=" hover:bg-teal-500 hover:text-white "
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <GoHorizontalRule className="w-[22px] h-[22px]" />
        </button>
        <button
          className=" hover:bg-teal-500 hover:text-white "
          onClick={() => editor.chain().focus().setHardBreak().run()}
        >
          <ImPageBreak className="w-[18px] h-[18px]" />
        </button>
        <button
          className=" hover:bg-teal-500 hover:text-white "
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <LuUndo className="w-[18px] h-[18px]" />
        </button>
        <button
          className=" hover:bg-teal-500 hover:text-white "
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <LuRedo className="w-[18px] h-[18px]" />
        </button>
        <button
          onClick={() => editor.chain().focus().setColor("#958DF1").run()}
          className={` px-[5px] py-[1px] rounded-sm  hover:bg-teal-500 hover:text-white   ${
            editor.isActive("textStyle", { color: "#958DF1" })
              ? "bg-gray-800/80 text-white"
              : ""
          }`}
        >
          <BiFontFamily className="w-[22px] h-[22px] text-[#958DF1] font-bold" />
        </button>
      </div>
    </>
  );
};

export default () => {
  const editor = useEditor({
    extensions: [
      BulletList.configure({
        itemTypeName: "listItem",
        keepAttributes: true,
        keepMarks: true,
      }),
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      //@ts-ignore
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        code: {},
        heading: {
          levels: [1, 2, 3, 4],
        },
      }),
    ],

    content: `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
      </p>
      <ul>
        <li>
          That’s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
      <p>
        Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
      </p>
      <pre><code class="language-css">body {
  display: none;
}</code></pre>
      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
      </p>
      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
    `,
  });
  console.log(editor?.getHTML());

  return (
    <div>
      <MenuBar
        // @ts-ignore
        editor={editor}
      />
      <EditorContent editor={editor} />
    </div>
  );
};
