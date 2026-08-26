import { useState } from "react";
import { Link } from "wouter";
import { Plus, Trash2, Upload } from "lucide-react";
import { trpc } from "@/lib/trpc";
import "./AdminContactButtons.css";

export function AdminContactButtons() {
  const [form, setForm] = useState({
    platformType: "",
    iconUrl: "",
    linkUrl: "",
    displayText: "",
    tooltipText: "",
    sortOrder: 0,
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const { data: buttons, refetch } = trpc.floatingContactButtons.listAll.useQuery();
  const createMutation = trpc.floatingContactButtons.create.useMutation();
  const updateMutation = trpc.floatingContactButtons.update.useMutation();
  const deleteMutation = trpc.floatingContactButtons.delete.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingId) {
        await updateMutation.mutateAsync({
          id: editingId,
          ...form,
        });
      } else {
        await createMutation.mutateAsync({
          ...form,
          isActive: true,
        });
      }

      refetch();
      setForm({
        platformType: "",
        iconUrl: "",
        linkUrl: "",
        displayText: "",
        tooltipText: "",
        sortOrder: 0,
      });
      setEditingId(null);
    } catch (err) {
      console.error("Failed to save button:", err);
    }
  };

  const handleEdit = (button: any) => {
    setForm({
      platformType: button.platformType,
      iconUrl: button.iconUrl,
      linkUrl: button.linkUrl,
      displayText: button.displayText || "",
      tooltipText: button.tooltipText || "",
      sortOrder: button.sortOrder,
    });
    setEditingId(button.id);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("确定要删除这个按钮吗？")) return;

    try {
      await deleteMutation.mutateAsync({ id });
      refetch();
    } catch (err) {
      console.error("Failed to delete button:", err);
    }
  };

  const handleToggleActive = async (button: any) => {
    try {
      await updateMutation.mutateAsync({
        id: button.id,
        isActive: !button.isActive,
      });
      refetch();
    } catch (err) {
      console.error("Failed to toggle button:", err);
    }
  };

  return (
    <div className="admin-contact-buttons">
      <div className="admin-header">
        <h1>浮动联系按钮管理</h1>
        <Link href="/">← 返回首页</Link>
      </div>

      <div className="admin-content">
        <div className="button-form">
          <h2>{editingId ? "编辑按钮" : "添加新按钮"}</h2>
          <form onSubmit={handleSubmit}>
            <label>
              平台类型 (如: WhatsApp, Telegram, WeChat)
              <input
                type="text"
                value={form.platformType}
                onChange={(e) => setForm({ ...form, platformType: e.target.value })}
                required
                placeholder="WhatsApp"
              />
            </label>

            <label>
              图标 URL
              <input
                type="url"
                value={form.iconUrl}
                onChange={(e) => setForm({ ...form, iconUrl: e.target.value })}
                required
                placeholder="https://example.com/whatsapp-icon.png"
              />
              <small>建议尺寸: 64x64px PNG 格式，透明背景</small>
            </label>

            <label>
              链接 URL
              <input
                type="url"
                value={form.linkUrl}
                onChange={(e) => setForm({ ...form, linkUrl: e.target.value })}
                required
                placeholder="https://wa.me/8613800138000"
              />
            </label>

            <label>
              显示文字 (可选)
              <input
                type="text"
                value={form.displayText}
                onChange={(e) => setForm({ ...form, displayText: e.target.value })}
                placeholder="Chat with us"
              />
            </label>

            <label>
              提示文字 (可选)
              <input
                type="text"
                value={form.tooltipText}
                onChange={(e) => setForm({ ...form, tooltipText: e.target.value })}
                placeholder="Contact us on WhatsApp"
              />
            </label>

            <label>
              排序顺序
              <input
                type="number"
                value={form.sortOrder}
                onChange={(e) => setForm({ ...form, sortOrder: parseInt(e.target.value) })}
                placeholder="0"
              />
              <small>数字越小越靠前</small>
            </label>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                {editingId ? "更新" : "添加"} <Plus size={16} />
              </button>
              {editingId && (
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => {
                    setEditingId(null);
                    setForm({
                      platformType: "",
                      iconUrl: "",
                      linkUrl: "",
                      displayText: "",
                      tooltipText: "",
                      sortOrder: 0,
                    });
                  }}
                >
                  取消
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="button-list">
          <h2>已配置的按钮</h2>
          {!buttons || buttons.length === 0 ? (
            <p className="empty-state">还没有配置任何按钮</p>
          ) : (
            <div className="buttons-grid">
              {buttons.map((button) => (
                <div key={button.id} className={`button-card ${!button.isActive ? 'inactive' : ''}`}>
                  <div className="button-preview">
                    <img src={button.iconUrl} alt={button.platformType} />
                  </div>
                  <div className="button-info">
                    <h3>{button.platformType}</h3>
                    <p className="link-url">{button.linkUrl}</p>
                    {button.displayText && <p className="display-text">"{button.displayText}"</p>}
                    <p className="sort-order">排序: {button.sortOrder}</p>
                  </div>
                  <div className="button-actions">
                    <button
                      onClick={() => handleToggleActive(button)}
                      className={button.isActive ? "btn-active" : "btn-inactive"}
                    >
                      {button.isActive ? "已启用" : "已禁用"}
                    </button>
                    <button onClick={() => handleEdit(button)} className="btn-edit">
                      编辑
                    </button>
                    <button onClick={() => handleDelete(button.id)} className="btn-delete">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="usage-guide">
          <h3>使用说明</h3>
          <ol>
            <li>准备图标：建议使用 64x64px PNG 格式，透明背景</li>
            <li>上传图标到 /public/images/ 目录，或使用外部图床</li>
            <li>WhatsApp 链接格式: <code>https://wa.me/8613800138000</code></li>
            <li>Telegram 链接格式: <code>https://t.me/username</code></li>
            <li>WeChat 可以链接到二维码图片或填写微信号说明页</li>
            <li>按钮在页面滚动超过 400px 后显示</li>
            <li>只有"已启用"的按钮会显示在前端</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
