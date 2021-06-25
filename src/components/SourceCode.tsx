import React from 'react';

type Prop = {
  compile: (src: string) => void,
  default_code: string,
}

const SourceCode = ({compile, default_code}: Prop) => {
  const update = (e: any) => {
    compile(e.target.value);
  };
  return <textarea className="textarea" onChange={update} defaultValue={default_code} />;
};

export default SourceCode;
