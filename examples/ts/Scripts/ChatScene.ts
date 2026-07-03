/// <reference path="../fairygui.d.ts" />

import { Callable, RegEx } from "godot";
import DemoSceneBase from "./DemoSceneBase";

interface ChatMessage {
    sender: string;
    sender_icon: string;
    text: string;
    from_me: boolean;
}

export default class ChatScene extends DemoSceneBase {
    private _list: GList | null = null;
    private _input: GTextField | null = null;
    private _messages: ChatMessage[] = [];
    private _emojiSelectUi: GObject | null = null;

    protected ContinueInit(): void {
        UIPackage.addPackage("res://Resources/UI/Emoji");

        this._view = UIPackage.createObject("Emoji", "Main");
        this._groot!.addChild(this._view);

        this._list = this._view.getChild("list") as GList | null;
        if (this._list != null) {
            this._list.setVirtual();
            this._list.setItemRenderer(Callable.create(this._renderListItem.bind(this)));
            this._list.setItemProvider(Callable.create(this._getListItemResource.bind(this)));
        }

        this._input = this._view.getChild("input") as GTextField | null;
        if (this._input != null) {
            this._input.addEventListener(
                UIEventDispatcher.SUBMIT,
                Callable.create(this._onSubmit.bind(this)),
            );
        }

        const sendBtn = this._view.getChild("btnSend");
        if (sendBtn != null) {
            sendBtn.addClickListener(Callable.create(this._onClickSendBtn.bind(this)));
        }

        const emojiBtn = this._view.getChild("btnEmoji");
        if (emojiBtn != null) {
            emojiBtn.addClickListener(Callable.create(this._onClickEmojiBtn.bind(this)));
        }

        this._emojiSelectUi = UIPackage.createObject("Emoji", "EmojiSelectUI");
        if (this._emojiSelectUi != null) {
            const emojiList = this._emojiSelectUi.getChild("list");
            if (emojiList != null) {
                emojiList.addEventListener(
                    UIEventDispatcher.CLICKITEM,
                    Callable.create(this._onClickEmoji.bind(this)),
                );
            }
        }

        this._addMsg("Unity", "r0", "Hello!", true);
    }

    private _onClickSendBtn(): void {
        if (this._input == null) {
            return;
        }
        const msg = this._input.getText();
        if (msg.length === 0) {
            return;
        }
        this._addMsg("Unity", "r0", msg, true);
        this._input.setText("");
    }

    private _onClickEmojiBtn(): void {
        if (this._emojiSelectUi == null) {
            return;
        }
        this._groot!.showPopupSimple(this._emojiSelectUi);
    }

    private _onClickEmoji(): void {
        const item = this._groot!.getTouchTarget();
        if (item == null || this._input == null) {
            return;
        }
        this._input.setText(`${this._input.getText()}[: ${item.getText()}]`);
    }

    private _onSubmit(): void {
        this._onClickSendBtn();
    }

    private _parseEmoji(text: string): string {
        const regex = new RegEx();
        regex.compile("\\[:\\s*(\\w+)\\]");
        const result = regex.search(text);
        if (result == null) {
            return text;
        }
        const tag = result.get_string(1);
        return text.replace(result.get_string(0), `<img src='ui://Emoji/${tag}'/>`);
    }

    private _renderListItem(index: number, obj: GObject): void {
        if (index >= this._messages.length) {
            return;
        }
        const msg = this._messages[index];
        obj.setIcon(`ui://Emoji/${msg.sender_icon}`);

        const tf = obj.getChild("msg");
        if (tf instanceof GRichTextField) {
            tf.setUBBEnabled(false);
            tf.setWidth(tf.getInitSize().x);
            tf.setText(this._parseEmoji(msg.text));
            tf.setWidth(tf.getTextSize().x);
        }

        const nameObj = obj.getChild("name");
        if (nameObj != null && !msg.from_me) {
            nameObj.setText(msg.sender);
        }
    }

    private _getListItemResource(index: number): string {
        if (index >= this._messages.length) {
            return "";
        }
        const msg = this._messages[index];
        return msg.from_me ? "ui://Emoji/chatRight" : "ui://Emoji/chatLeft";
    }

    private _addMsg(sender: string, senderIcon: string, text: string, fromMe: boolean): void {
        const sp = this._list?.getScrollPane() ?? null;
        const isScrollBottom = sp != null && sp.isBottomMost();

        const msg: ChatMessage = {
            sender,
            sender_icon: senderIcon,
            text,
            from_me: fromMe,
        };
        this._messages.push(msg);

        if (fromMe && (this._messages.length === 1 || randf() < 0.5)) {
            this._messages.push({
                sender: "FairyGUI",
                sender_icon: "r1",
                text: "Today is a good day. [:cool]",
                from_me: false,
            });
        }

        if (this._messages.length > 100) {
            this._messages = this._messages.slice(-100);
        }

        if (this._list != null) {
            this._list.setNumItems(this._messages.length);
            if (isScrollBottom && sp != null) {
                sp.scrollBottom(true);
            }
        }
    }
}
