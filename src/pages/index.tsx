import Layout from '../components/Layout'
import { useState } from 'react';
import { faBook, faLeaf, faShareSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Version from '../version'
import SourceCode from '../components/SourceCode'
import Result from '../components/Result'

const default_code = `// Cumin here

// Def of P.
struct P { x: Int, y: Int = 0 }

// P variables.
let p = P(1);  // (1, 0)
let q = P(2, 1);

// Function: Int -> P
let diagonal(x: Int) = P(x, x);

// List of P
[p, q, diagonal(10)]`;

const IndexPage = () => {

  const _compile = (source: string) => {
    return `Compile ${source}`;
  };

  const [compiled, setResult] = useState(_compile(default_code));
  const compile = (source: string) => {
    let result = _compile(source);
    setResult(result);
  };

  return (
    <Layout>
      <h1 className="title">
        Try Cumin Online
        &nbsp;
        <FontAwesomeIcon icon={faLeaf} width="32" />
      </h1>
      <h2 className="subtitle is-6">{Version}</h2>
      <div className="container" id="tco">
        <div className="columns">
          <div className="column">
            <div className="control">
              <SourceCode compile={compile} default_code={default_code} />
            </div>
            <div className="control">
              <button className="button is-warning is-light is-small">
                <FontAwesomeIcon icon={faShareSquare} width="16" />
                &nbsp; Share Code
              </button>
              <a className="button is-link is-light is-small" href="http://cympfh.cc/cumin/" target="_blank">
                <FontAwesomeIcon icon={faBook} width="16" />
                &nbsp; Learn Cumin
              </a>
              <div className="container"><div className="notification is-info is-light"></div></div>
            </div>
          </div>
          <div className="column">
            <div className="control">
              <Result compiled={compiled} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage
