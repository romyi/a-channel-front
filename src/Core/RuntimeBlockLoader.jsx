import React, {Suspense} from 'react'

const RuntimeBlockLoader = ({blocks}) => {
  return (
    <Suspense fallback="...">{blocks.map((block) => {
        let OtherComponent = React.lazy(() => import(`../Blocks/${block.title}/index.js`));
        return (
          <OtherComponent key={block.title + block.path} interfaces={block.implements} />
        )
      })}</Suspense>
  )
}

export default RuntimeBlockLoader