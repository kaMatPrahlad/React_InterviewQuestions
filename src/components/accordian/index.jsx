//single selection
//multiple selection
// import style from ".style.css";
import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexofCurrentId = cpyMultiple.indexOf(getCurrentId);
    console.log(findIndexofCurrentId);
    if (findIndexofCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexofCurrentId, 1);

    setMultiple(cpyMultiple);
  }

  return (
    <div className="wrapper flex h-[100vh] w-full justify-center items-center flex-col gap-5">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="py-[10px] px-[20px] bg-[#614101] text-white font-bold text-[20px] cursor-pointer"
      >
        Enable multiple selection
      </button>
      <div className="accordian w-[500px]">
        {data && data.length > 0 ? (
          data.map((dataItem, i) => (
            <div
              className="item bg-[#614101] mb-[10px] py-[10px] px-[20px]"
              key={i}
            >
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title text-white flex flex-col justify-between items-center cursor-pointer"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}
                {/* {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="content text-white h-auto">
                    {dataItem.answer}
                  </div>
                ) : null} */}
              </div>
            </div>
          ))
        ) : (
          <div className="no-data">Data not found!</div>
        )}
      </div>
    </div>
  );
}
