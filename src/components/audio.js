import React, { useState } from "react"

const Audio = () => {
  const [state, setState] = useState("paused")
  return (
    <section>
      <audio
        controls
        src="https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </section>
  )
}

export default Audio
