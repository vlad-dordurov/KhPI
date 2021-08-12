import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DocumentRequest } from "../DocumentRequest";
import "./documentPage.scss";

export const DocumentPage = () => {
  const dispatch = useDispatch();
  // const documentList = useSelector(getDocumentSelector);
  const documentList = [{
    id: '123',
    group: "218б",
    fullName: "Дордуров Владислав Сергеевич",
    learnType: "денна",
    documentType: 'справка',
    institution: "infiz",
    isReady: false,
  }];

  useEffect(() => {
    // dispatch(getDocuments())
  }, [])

  return (
    <div className="documentPage">
      {documentList.map((document) => <DocumentRequest key={document.id} document={document} />)}
    </div>
  );
}
