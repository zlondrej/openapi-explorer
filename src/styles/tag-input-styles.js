import { css } from 'lit';
export default css`
  tag-input .tags,
  tag-tuple-input .tags {
    display: flex;
    flex-wrap: wrap;
    outline: none;
    padding: 0;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    cursor: text;
    overflow: hidden;
    background: var(--input-bg);
  }

  tag-input .tag {
    cursor: pointer;
    padding: 3px;
    margin: 2px;
  }

  tag-tuple-input .tag {
    cursor: pointer;
    margin: 2px;
  }

  tag-tuple-input .tag-key {
    padding: 3px;
  }

  tag-tuple-input .tag-value {
    padding: 3px;
    padding-left: 0;
  }

  tag-input .tag,
  tag-tuple-input .tag {
    align-self: center;
    border: 1px solid var(--border-color);
    background-color: var(--bg3);
    color: var(--fg3);
    border-radius: var(--border-radius);
    word-break: break-all;
    font-size: var(--font-size-small);
  }

  tag-input .tag:hover ~ #cursor,
  tag-tuple-input .tag:hover ~ #cursor {
    display: block;
  }

  tag-input .editor,
  tag-tuple-input .editor {
    flex: 1;
    border: 1px solid transparent;
    color: var(--fg);
    min-width: 60px;
    outline: none;
    line-height: inherit;
    font-family: inherit;
    background: transparent;
    font-size: calc(var(--font-size-small) + 1px);
  }

  tag-input .editor::placeholder,
  tag-tuple-input .editor::placeholder {
    color: var(--placeholder-color);
    opacity: 1;
  }
`;
