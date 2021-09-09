import { css } from 'styled-components'

const globalValues = {
  bxShdw:
    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
  navbar_elements_height: '3rem',
  navbar_column_gap: '1rem',
  navbar_height: '4.5rem',
  dropdown_menu_bdr_rds: '10px',
  ButtonCSS: css`
    font-size: inherit;
    border-radius: 0.5rem;
    font-size: inherit;
    padding: 1.25rem 1.75rem;
    font-weight: 700;
    border: none;
    color: white;
    background-color: #42b72a;
    width: 100%;
    &:hover {
      cursor: pointer;
    }
  `,
  InputCSS: css`
    outline: none;
    border: 1px solid #dddfe2;
    border-radius: 0.5rem;
    width: 100%;
    font-size: inherit;
    padding: 1.25rem 1.75rem;
    &::placeholder {
      color: #90949c;
      font-weight: 100;
    }
  `,
}

export default globalValues
