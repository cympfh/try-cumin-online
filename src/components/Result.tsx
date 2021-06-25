type Prop = {
  compiled: string,
};

const Result = ({compiled}: Prop) => {
  return <textarea className="textarea is-warning is-normal" readOnly value={compiled} />
};

export default Result;
