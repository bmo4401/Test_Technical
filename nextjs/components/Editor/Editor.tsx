'use client';
import TextareaAutosize from 'react-textarea-autosize';

import { useCallback, useEffect, useRef, useState } from 'react';
import type EditorJS from '@editorjs/editorjs';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
interface EditorProps {
  subredditId: string;
}
const Editor: React.FC<EditorProps> = ({ subredditId }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMounted, setMounted] = useState(false);
  const _titleRef = useRef<HTMLTextAreaElement>(null);

  const ref = useRef<EditorJS>();
  const initializeEditor = useCallback(async () => {
    const EditorJS = (await import('@editorjs/editorjs')).default;
    const Header = (await import('@editorjs/header')).default;
    const Embed = (await import('@editorjs/embed')).default;
    const Table = (await import('@editorjs/table')).default;
    const List = (await import('@editorjs/list')).default;
    const Code = (await import('@editorjs/code')).default;
    const LinkTool = (await import('@editorjs/link')).default;
    const InlineCode = (await import('@editorjs/inline-code')).default;
    const ImageTool = (await import('@editorjs/image')).default;

    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'editor',
        onReady() {
          ref.current = editor;
        },
        placeholder: 'Type here to write your post...',
        inlineToolbar: true,
        data: {
          blocks: [],
        },
        tools: {
          header: Header,
          linkTool: {
            class: LinkTool,
            config: {
              endpoint: '/api/link',
            },
          },
          image: {
            class: ImageTool,
            config: {
              uploader: {},
            },
          },
          list: List,
          code: Code,
          embed: Embed,
          table: Table,
          inlineCode: InlineCode,
        },
      });
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await initializeEditor();
      setTimeout(() => {
        /* set focus to title */
        _titleRef.current?.focus();
      });
    };
    if (isMounted) {
      init();
      return () => {
        ref.current?.destroy();
        ref.current = undefined;
      };
    }
  }, [isMounted, initializeEditor]);
  useEffect(() => {
    if (typeof window !== 'undefined') setMounted(true);
  }, []);

  /*   const { ref: titleRef, ...rest } = register('title'); */
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <div className="w-full p-4 bg-zinc-50 rounded-lg border border-zinc-200">
      <form
        className="w-fit"
        id="subreddit-post-form"
        onSubmit={onSubmit}
      >
        <div className="prose prose-stone dark:prose-invert">
          <TextareaAutosize
            ref={(e) => {
              console.log(e);
              /*               titleRef(e); */
              //@ts-ignore
              _titleRef.current = e;
            }}
            placeholder="Title"
            className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none border-emerald-500"
          />
          <div
            id="editor"
            className="min-h-[500px]"
          />
        </div>
      </form>
    </div>
  );
};
export default Editor;
