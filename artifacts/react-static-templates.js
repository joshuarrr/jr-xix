
import universal, { setHasBabelPlugin } from '/Users/joshuar/Projects/jr-xix/node_modules/react-universal-component/dist/index.js'


setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
}

const t_0 = universal(import('../src/containers/404'), universalOptions)
const t_1 = universal(import('../src/containers/design'), universalOptions)
const t_2 = universal(import('../src/containers/design/hilights'), universalOptions)
const t_3 = universal(import('../src/containers/design/lumen'), universalOptions)
const t_4 = universal(import('../src/containers/design/idealist'), universalOptions)
const t_5 = universal(import('../src/containers/code'), universalOptions)
const t_6 = universal(import('../src/containers/about'), universalOptions)
const t_7 = universal(import('../src/containers/stories'), universalOptions)
const t_8 = universal(import('../src/containers/stories/aila.js'), universalOptions)


// Template Map
export default {
  '../src/containers/404': t_0,
'../src/containers/design': t_1,
'../src/containers/design/hilights': t_2,
'../src/containers/design/lumen': t_3,
'../src/containers/design/idealist': t_4,
'../src/containers/code': t_5,
'../src/containers/about': t_6,
'../src/containers/stories': t_7,
'../src/containers/stories/aila.js': t_8
}

export const notFoundTemplate = "../src/containers/404"
