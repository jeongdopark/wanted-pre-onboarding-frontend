import React, { useState, useRef, useCallback } from 'react'

// 유효성 검사

export const useInput = (type) => {
  const message = useRef({ value: '' })
  const valid = useRef({ value: false })
  const [inputValue, setInputValue] = useState('')

  const checkValidation = useCallback(
    (type) => (e) => {
      setInputValue(e.target.value)
      switch (type) {
        case 'email':
          valid.current = /@/.test(e.target.value)
          if (!valid.current)
            message.current = '이메일에 "@" 포함되어야 합니다.'
          else message.current = ''
          break
        case 'password':
          if (e.target.value.length >= 8) valid.current = true
          else valid.current = false

          if (!valid.current)
            message.current = '비밀번호는 8자 이상이어야 합니다.'
          else message.current = ''
      }
    },
    [inputValue],
  )

  return [message, valid, inputValue, checkValidation]
}
