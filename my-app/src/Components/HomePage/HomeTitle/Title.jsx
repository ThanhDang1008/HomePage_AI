import React from "react";
import "./Title.scss";
import { TinyColor } from "@ctrl/tinycolor";
import { Button, ConfigProvider, Space } from "antd";

const colors1 = ["#6253E1", "#04BEFE"];
const colors2 = ["#fc6076", "#ff9a44", "#ef9d43", "#e75516"];
const colors3 = ["#40e495", "#30dd8a", "#2bb673"];

const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

const Title = () => {
  return (
    <div className="container_item">
      <p className="container_item--title">AI for every developer</p>
      <p className="container_item--text">
        Build with state-of-the-art generative AI models and tools to make AI
        helpful for everyone
      </p>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: `linear-gradient(135deg, ${colors1.join(", ")})`,
              colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                colors1
              ).join(", ")})`,
              colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                colors1
              ).join(", ")})`,
              lineWidth: 0,
            },
          },
        }}
      >
        <Button type="primary" size="large">
          Learn more about API
        </Button>
      </ConfigProvider>
      <div className="container_item--image">
        <a className="container_item-link" href="">
          Try Google Cloud's enterprise-ready AI
        </a>
      </div>
    </div>
  );
};

export default Title;
