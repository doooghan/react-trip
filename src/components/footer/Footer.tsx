import React from "react";
import { Layout, Typography } from "antd";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layout.Footer>
      <Typography.Title
        level={3}
        style={{
          textAlign: "center",
          lineHeight: "60px",
          background: "#f5f5f5",
        }}
      >
        {t("footer.detail")}
      </Typography.Title>
    </Layout.Footer>
  );
};
