import { Skeleton, Stack } from '@chakra-ui/react'

import React from 'react'

const SkeletonComponent = () => {
  return (
    <Stack>
      <Skeleton height={'20px'}>
        Skeleton Box Container
      </Skeleton>
      <Skeleton height={'20px'}>
        Skeleton Box Container
      </Skeleton>
    </Stack>
  )
}

export default SkeletonComponent