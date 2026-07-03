using Godot;
using System.Collections.Generic;

namespace FairyGUI.Examples;

public partial class ChatScene : DemoSceneBase
{
    private class ChatMessage
    {
        public string Sender;
        public string SenderIcon;
        public string Text;
        public bool FromMe;
    }

    private GObject _list;
    private GObject _input;
    private readonly List<ChatMessage> _messages = new();
    private GObject _emojiSelectUi;

    protected override void ContinueInit()
    {
        UIPackage.AddPackage("res://Resources/UI/Emoji");

        _view = UIPackage.CreateObject("Emoji", "Main");
        _groot.AddChild(_view);

        _list = _view.GetChild("list");
        if (_list != null)
        {
            _list.SetVirtual();
            _list.SetItemRenderer(new Callable(this, MethodName.RenderListItem));
            _list.SetItemProvider(new Callable(this, MethodName.GetListItemResource));
        }

        _input = _view.GetChild("input");
        _input?.AddEventListener(FguiEvent.Submit, new Callable(this, MethodName.OnSubmit));

        var sendBtn = _view.GetChild("btnSend");
        sendBtn?.AddClickListener(new Callable(this, MethodName.OnClickSendBtn));

        var emojiBtn = _view.GetChild("btnEmoji");
        emojiBtn?.AddClickListener(new Callable(this, MethodName.OnClickEmojiBtn));

        _emojiSelectUi = UIPackage.CreateObject("Emoji", "EmojiSelectUI");
        if (_emojiSelectUi != null)
        {
            var emojiList = _emojiSelectUi.GetChild("list");
            emojiList?.AddEventListener(FguiEvent.ClickItem, new Callable(this, MethodName.OnClickEmoji));
        }

        AddMsg("Unity", "r0", "Hello!", true);
    }

    private void OnClickSendBtn()
    {
        if (_input == null)
            return;
        var msg = _input.GetText();
        if (string.IsNullOrEmpty(msg))
            return;
        AddMsg("Unity", "r0", msg, true);
        _input.SetText("");
    }

    private void OnClickEmojiBtn()
    {
        if (_emojiSelectUi == null)
            return;
        _groot.ShowPopupSimple(_emojiSelectUi);
    }

    private void OnClickEmoji()
    {
        var item = _groot.GetTouchTarget();
        if (item == null || _input == null)
            return;
        _input.SetText(_input.GetText() + "[: " + item.GetText() + "]");
    }

    private void OnSubmit()
    {
        OnClickSendBtn();
    }

    private string ParseEmoji(string text)
    {
        var regex = new RegEx();
        regex.Compile("\\[:\\s*(\\w+)\\]");
        var result = regex.Search(text);
        if (result == null)
            return text;
        var tag = result.GetString(1);
        return text.Replace(result.GetString(0), $"<img src='ui://Emoji/{tag}'/>");
    }

    private void RenderListItem(int index, GodotObject obj)
    {
        if (index >= _messages.Count)
            return;
        var msg = _messages[index];
        obj.SetIcon("ui://Emoji/" + msg.SenderIcon);

        var tf = obj.GetChild("msg");
        if (tf is GRichTextField rtf)
        {
            rtf.SetUBBEnabled(false);
            rtf.SetWidth(rtf.GetInitSize().X);
            rtf.SetText(ParseEmoji(msg.Text));
            rtf.SetWidth(rtf.GetTextSize().X);
        }

        var nameObj = obj.GetChild("name");
        if (nameObj != null && !msg.FromMe)
            nameObj.SetText(msg.Sender);
    }

    private string GetListItemResource(int index)
    {
        if (index >= _messages.Count)
            return "";
        return _messages[index].FromMe ? "ui://Emoji/chatRight" : "ui://Emoji/chatLeft";
    }

    private void AddMsg(string sender, string senderIcon, string text, bool fromMe)
    {
        var sp = _list.GetScrollPane();
        var isScrollBottom = sp != null && sp.IsBottomMost();

        _messages.Add(new ChatMessage
        {
            Sender = sender,
            SenderIcon = senderIcon,
            Text = text,
            FromMe = fromMe
        });

        if (fromMe && (_messages.Count == 1 || GD.Randf() < 0.5f))
        {
            _messages.Add(new ChatMessage
            {
                Sender = "FairyGUI",
                SenderIcon = "r1",
                Text = "Today is a good day. [:cool]",
                FromMe = false
            });
        }

        if (_messages.Count > 100)
            _messages.RemoveRange(0, _messages.Count - 100);

        if (_list != null)
        {
            _list.SetNumItems(_messages.Count);
            if (isScrollBottom && sp != null)
                sp.ScrollBottom(true);
        }
    }
}
