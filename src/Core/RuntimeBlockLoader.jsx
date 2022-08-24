import React, {Suspense} from 'react'

// Разделение кода на чанки. Подгрузка чанков по мере необходимости.
// В дев-режиме vite не бандлит модули если я все правильно понял
// (изменяемое поведение), но в проде это будет иметь эффект.
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