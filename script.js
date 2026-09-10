<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AI Based Fake Detection</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
  <h1>AI Based Fake Detection</h1>
  <p>Detect Fake News, Images, Videos, and URLs using AI</p>
</header>

<nav>
  <a href="#home">Home</a>
  <a href="#choose">Detection Type</a>
  <a href="#upload">Upload</a>
  <a href="#analysis">AI Analysis</a>
  <a href="#result">Result</a>
  <a href="#history">History</a>
  <a href="#about">About</a>
</nav>

<section id="home">
  <h2>Welcome</h2>
  <p>This system helps you verify whether content is Real, Fake, or Suspicious using AI models.</p>
  <button id="startBtn">Start Detection</button>
</section>

<section id="choose">
  <h2>Choose Detection Type</h2>
  <ul>
    <li><button class="detectBtn" data-type="news">Fake News Detection</button></li>
    <li><button class="detectBtn" data-type="image">Fake Image Detection</button></li>
    <li><button class="detectBtn" data-type="video">Fake Video Detection</button></li>
    <li><button class="detectBtn" data-type="url">Website/URL Detection</button></li>
  </ul>
</section>

<section id="upload">
  <h2>Upload / Enter Information</h2>
  <textarea id="textInput" rows="4" cols="60" placeholder="Paste news text or URL"></textarea><br><br>
  <input type="file" id="fileInput"><br><br>
  <button id="analyzeBtn">Analyze with AI</button>
</section>

<section id="analysis">
  <h2>AI Analysis</h2>
  <p id="analysisStatus">Waiting for input...</p>
</section>

<section id="result">
  <h2>Detection Result</h2>
  <div class="result-box" id="resultBox">
    <p><strong>Status:</strong> --</p>
    <p><strong>Confidence Score:</strong> --</p>
    <p><strong>Reason:</strong> --</p>
    <p><strong>Source Verification:</strong> --</p>
  </div>
</section>

<section id="history">
  <h2>Detection History</h2>
  <ul id="historyList"></ul>
</section>

<section id="about">
  <h2>About / Help</h2>
  <p>This AI system uses deep learning models to detect manipulated or synthetic content.</p>
  <p><strong>Limitations:</strong> AI may not always be 100% accurate. Use results as guidance.</p>
  <p><strong>Privacy:</strong> Uploaded content is analyzed securely and stored only for history tracking.</p>
</section>

<footer>
  <p>&copy; 2026 AI Fake Detection Project</p>
</footer>

<!-- Link to JavaScript -->
<script src="script.js"></script>
</body>
</html>
