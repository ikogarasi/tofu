import React from "react";

export interface TabHeader {
  targetName: string;
  title: string;
}

export interface TabBody {
  targetName: string;
  presentation: JSX.Element;
}

interface TabsProps {
  tabHeaders: TabHeader[];
  tabBody: TabBody[];
}

const Tabs = ({ tabBody, tabHeaders }: TabsProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState<number>(0);

  return (
    <>
      <ul className="nav nav-tabs mb-3 mt-5" role="tablist">
        {tabHeaders.map((value, i) => (
          <li key={i} className="nav-item" role="presentation">
            <button
              className={`nav-link ${i === selectedTabIndex && "active"}`}
              onClick={() => setSelectedTabIndex(i)}
              id={`${value.targetName}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#${value.targetName}`}
              type="button"
              role="tab"
              aria-controls={value.targetName}
              aria-selected={i === 0}
            >
              {value.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabBody.map((value, i) => (
          <div
            className={`tab-pane fade ${
              i === selectedTabIndex && "show active"
            }`}
            id={value.targetName}
            role="tabpanel"
            aria-labelledby={`${value.targetName}-tab`}
            key={i}
          >
            {value.presentation}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
