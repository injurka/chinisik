import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    audio: {
      generate(payload: DTO.IGenerateQuizQuestionP) {
        return instance<DTO.IGenerateQuizQuestionR>('/v1/quiz/audio/generate', {
          method: 'POST',
          body: payload,
        })
      },
    },
  }
}

export default method
