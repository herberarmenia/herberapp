import React from "react";
import moment from "moment";

const PostDetail =({post})=>{
  const getContentFragment = (index,text,obj,type)=>{
    let modifiedText = text;
    if(obj){
      if(obj.bold){
        modifiedText = (<b key = {index}>{text}</b>)
      }
      if(obj.italic){
        modifiedText = (<em key = {index}>{text}</em>)
      }
      if(obj.underline){
        modifiedText = (<u key = {index}>{text}</u>)
      }
    }
    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  }
    return (
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          {/* <img
            src={post.featuredImage.url}
            alt={post.title}
            className="object-top h-full w-full rounded-t-lg"
          /> */}
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
              <div className="m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />{" "}
                </svg>
              </div>
              <div>{moment(post.createdAt).format("MMM/DD/YYYY")}</div>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
            {
              post.content.raw.children.map((typeObj,index)=>{
                const children = typeObj.children.map((item,itemIndex)=>getContentFragment(itemIndex,item.text,item))
                return getContentFragment(index, children, typeObj, typeObj.type)
              })
            }
        </div>
      </div>
    );
}
export default PostDetail;