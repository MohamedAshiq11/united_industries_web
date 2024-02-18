interface Props {
  text: string;
  size?: string;
  textColor?: string;
  fontWeight?: string;
  lineHeight?: string;
  fontFamily?: string;
}

const CommonText = (props: Props) => {
  const textStyle = {
      fontSize: props.size ?? "17px",
      lineHeight: props.lineHeight,
      color: props.textColor ?? "#41444B",
      fontWeight: props.fontWeight ?? "500",
      fontFamily: props.fontFamily ?? "Lato",
  };
  return (
    <div className="common-text" style={textStyle}>
      {props.text}
    </div>
  );
};

export default CommonText;
