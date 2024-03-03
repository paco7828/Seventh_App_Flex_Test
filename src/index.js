import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function CreateBox({ bgColor }) {
  return <div style={{ backgroundColor: bgColor , width: "100px", height: "100px"}}></div>
}

function Comp() {
  const [flexDirectionValue, setFlexDirectionValue] = useState("");
  const [flexWrapValue, setFlexWrapValue] = useState("");
  const [flexJustifyContentValue, setFlexJustifyContentValue] = useState("");
  const [flexAlignItemsValue, setFlexAlignItemsValue] = useState("");
  const [flexAlignContentValue, setFlexAlignContentValue] = useState("");
  const divBgs = ["red", "black", "green", "purple", "yellow", "pink"];

  const handleFlexDir = (e) => {
    setFlexDirectionValue(e.target.value);
  }

  const handleFlexWrap = (e) => {
    setFlexWrapValue(e.target.value);
  }

  const handleFlexJustifyContent = (e) => {
    setFlexJustifyContentValue(e.target.value);
  }

  const handleFlexAlignItems = (e) => {
    setFlexAlignItemsValue(e.target.value);
  }

  const handleFlexAlignContent = (e) => {
    setFlexAlignContentValue(e.target.value);
  }

  const flexboxStyles = {
    display: "flex",
    gap: "10px",
    height: "500px",
    width: "500px",
    transition: "all 0.3s",
    flexDirection: flexDirectionValue,
    flexWrap: flexWrapValue,
    justifyContent: flexJustifyContentValue,
    alignItems: flexAlignItemsValue,
    alignContent: flexAlignContentValue
  }

  return (
    <div>
      <label>flex-direction</label>
      <br />
      <select value={flexDirectionValue} onChange={handleFlexDir}>
        <option value="row">row</option>
        <option value="row-reverse">row-reverse</option>
        <option value="column">column</option>
        <option value="column-reverse">column-reverse</option>
      </select>
      <br />
      <label>flex-wrap</label>
      <br />
      <select value={flexWrapValue} onChange={handleFlexWrap}>
        <option value="nowrap">nowrap</option>
        <option value="wrap">wrap</option>
        <option value="wrap-reverse">wrap-reverse</option>
      </select>
      <br />
      <label>justify-content</label>
      <br />
      <select value={flexJustifyContentValue} onChange={handleFlexJustifyContent}>
        <option value="flex-start">flex-start</option>
        <option value="flex-end">flex-end</option>
        <option value="center">center</option>
        <option value="space-between">space-between</option>
        <option value="space-around">space-around</option>
        <option value="space-evenly">space-evenly</option>
      </select>
      <br />
      <label>align-items</label>
      <br />
      <select value={flexAlignItemsValue} onChange={handleFlexAlignItems}>
        <option value="flex-start">flex-start</option>
        <option value="flex-end">flex-end</option>
        <option value="center">center</option>
        <option value="baseline">baseline</option>
        <option value="stretch">stretch</option>
      </select>
      <br />
      <label>align-content</label>
      <br />
      <select value={flexAlignContentValue} onChange={handleFlexAlignContent}>
        <option value="flex-start">flex-start</option>
        <option value="flex-end">flex-end</option>
        <option value="center">center</option>
        <option value="space-between">space-between</option>
        <option value="space-around">space-around</option>
        <option value="stretch">stretch</option>
      </select>
      <div style={flexboxStyles}>
        {divBgs.map((divBgs, index) => <CreateBox key={index} bgColor={divBgs} />)}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Comp />);