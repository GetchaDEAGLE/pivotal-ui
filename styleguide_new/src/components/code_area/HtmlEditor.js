import React from 'react'
import AceEditor from 'react-ace'

import {Icon} from 'pui-react-iconography'
import {CopyToClipboardButton} from 'pui-react-copy-to-clipboard'

export default class HtmlEditor extends React.Component {
  render () {
    return <div className="code-editor--html-preview">
      <div className="code-editor--titlebar">
        <Icon src="html5"/> HTML
        <CopyToClipboardButton text={this.props.code} className="code-editor--titlebar-copy"/>
      </div>
      <AceEditor
                 width="100%"
                 height="200px"
                 mode="html"
                 readOnly={this.props.readOnly ? this.props.readOnly : false}
                 theme="crimson_editor"
                 wrap={true}
                 value={this.props.code}
                 editorProps={{$blockScrolling: Infinity}}
                 onChange={this.props.changeHandler ? this.props.changeHandler : null }
      />
    </div>
  }
}