import { LitElement, html } from 'lit';

function parseTagString(tagString) {
  if (!tagString) {
    return [];
  }
  const tags = tagString.split(',');
  return tags.map((tag) => {
    const tagParts = tag.split(':');
    if (tagParts.length < 2) {
      return null;
    }
    const [key, value] = [tagParts.shift(), tagParts.join(':')];
    return { key, value };
  }).filter(tag => tag !== null);
}

export default class TagTupleInput extends LitElement {
  constructor() {
    super();
    this.key = null;
  }

  createRenderRoot() { return this; }

  render() {
    const tagItemTemplate = html`${
      (Array.isArray(this.value) && this.value || []).map((item, ix) => html`
        <span class='tag' @click="${() => this.deleteTag(ix)}"><span class='tag-key'>${item.key}:</span><span class='tag-value'>${item.value}</span></span>`)
    }`;

    return html`
      <div class='tags' tabindex="0">
        ${tagItemTemplate}
        ${this.key !== null ? html`<span class='tag'><span class='tag-key'>${this.key}:</span></span>` : ''}
        <input type="text" class='editor'
          @change="${this.handleLeave}" @paste="${(e) => this.afterPaste(e)}" @keydown="${this.afterKeyDown}"
          placeholder="${(this.key === null ? this.placeholder : this.placeholderValue) || ''}"
        >
      </div>
    `;
  }

  static get properties() {
    return {
      placeholder: { type: String },
      placeholderValue: { type: String },
      value: { type: Array, attribute: 'value' },
      key: { type: String, state: true },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    if (!Array.isArray(this.value)) {
      if (typeof this.value === 'string') {
        this.value = parseTagString(this.value);
      } else {
        this.value = [];
      }
    }
  }

  deleteTag(ix) {
    this.value.splice(ix, 1);
    this.value = [...this.value];
  }

  updated() {
    this.emitChanged();
  }

  afterPaste(e) {
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData('Text');
    const pastedArray = pastedData && parseTagString(pastedData) || [];
    this.value = this.value.concat(pastedArray);
    e.preventDefault();

    this.emitChanged();
  }

  afterKeyDown(e) {
    if (e.keyCode === 13) { // Enter
      e.stopPropagation();
      e.preventDefault();
      if (this.key !== null) {
        this.value = this.value.concat({ key: this.key, value: e.target.value });
        this.key = null;
      } else {
        this.key = e.target.value;
      }
      e.target.value = '';
    } else if (e.keyCode === 8) { // Backspace
      if (this.key !== null) {
        this.key = null;
      } else if (e.target.value.length === 0) {
        this.value = this.value.slice(0, -1);
      }
    }
    this.emitChanged();
  }

  handleLeave(e) {
    e.stopPropagation();
  }

  emitChanged() {
    this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value } }));
    this.dispatchEvent(new CustomEvent('input', { detail: { value: this.value } }));
  }
}
// Register the element with the browser
if (!customElements.get('openapi-explorer')) {
  customElements.define('tag-tuple-input', TagTupleInput);
}
