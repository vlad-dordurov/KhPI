import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CustomCheckBox } from "../CustomCheckBox/CustomCheckBox";
import DoneIcon from '../../assets/icons/done.svg';

import "./documentRequest.scss";

export const DocumentRequest = ({ document }) => {
  const { id, group, fullName, learnType, documentType, institution, isReady } = document;
  const [isDocumentReady, setIsDocumentReady] = useState(isReady);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(updateDocumentInfo(id, isDocumentReady));
  }, [isDocumentReady])

  return (
    <div className="document">
      <div className="document-info">
        <div className="document-info-header">
          <div className="document-fullName">ФІО студента</div>
          <div className="document-group">Група</div>
          <div className="document-learnType">Форма навчання</div>
          <div className="document-documentType">Вид довідки</div>
          <div className="document-institution">Заклад, у якй подається</div>
        </div>
        <div className="document-info-data">
          <div className="document-fullName">{fullName}</div>
          <div className="document-group">{group}</div>
          <div className="document-learnType">{learnType}</div>
          <div className="document-documentType">{documentType}</div>
          <div className="document-institution">{institution}</div>
        </div>
      </div>
      <div className="document-status">
        <div className="notDoneIcon">
        </div>
        <CustomCheckBox onChange={() => setIsDocumentReady((prev) => !prev)} isChecked={isDocumentReady}/>
        <DoneIcon />
      </div>
    </div>
  );
}
