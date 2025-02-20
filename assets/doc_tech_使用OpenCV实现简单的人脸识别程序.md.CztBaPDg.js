import{_ as s,c as n,o as a,a6 as p}from"./chunks/framework.d-Ywx6yJ.js";const e="/assets/cv1.CLG6GJCh.jpg",_=JSON.parse('{"title":"使用 OpenCV 实现简单的人脸识别程序","description":"","frontmatter":{"title":"使用 OpenCV 实现简单的人脸识别程序","date":"2019-09-10T15:34:13.000Z"},"headers":[],"relativePath":"doc/tech/使用OpenCV实现简单的人脸识别程序.md","filePath":"doc/tech/使用OpenCV实现简单的人脸识别程序.md"}'),l={name:"doc/tech/使用OpenCV实现简单的人脸识别程序.md"},c=p(`<p>本问就 Mac 系统安装 OpenCV 以及实现一个简单的人脸识别程序进行记录。</p><h3 id="安装-opencv" tabindex="-1">安装 OpenCV <a class="header-anchor" href="#安装-opencv" aria-label="Permalink to &quot;安装 OpenCV&quot;">​</a></h3><p>实际上，OpenCV 的安装方式比较多，这里为了避免一些第三方安装的问题，我们采用源代码方式安装。</p><p>安全前请确保本机已经安装了 CMake 和 Xcode。</p><p>我们去<a href="https://opencv.org/releases/" target="_blank" rel="noreferrer"> OpenCV 的网站</a> 下载源代码，选择 Release -&gt; SourceCode，可以选择最新的 4.11 版本。</p><p>这里以 4.1.1 版本为例，下载后我们解压到 <code>opencv-4.1.1</code>，然后进入到该目录，新建一个 release 目录用于存放我们构建好的内容，并进入到该目录：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir release</span></span>
<span class="line"><span>cd release/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后我们依次执行以下命令安装：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cmake -G “Unix Makefiles” .. </span></span>
<span class="line"><span>make</span></span>
<span class="line"><span>make install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>全部命令执行成功后，实际上就安装完成了，我们可以从最后的输出中看到，相关内容已经被安装到了 <code>/usr/local/include</code>、<code>/usr/local/lib</code> 等文件夹下。</p><h3 id="使用-xcode-编写人脸识别程序" tabindex="-1">使用 Xcode 编写人脸识别程序 <a class="header-anchor" href="#使用-xcode-编写人脸识别程序" aria-label="Permalink to &quot;使用 Xcode 编写人脸识别程序&quot;">​</a></h3><p>我们可以使用 Xcode 建立一个命令行程序，这里我们还需要处理两个问题：</p><ul><li>OpenCV 的引入</li><li>摄像头权限的获取</li></ul><h4 id="opencv-的引入" tabindex="-1">OpenCV 的引入 <a class="header-anchor" href="#opencv-的引入" aria-label="Permalink to &quot;OpenCV 的引入&quot;">​</a></h4><p>对于第一点，我们在 <strong>Build Setting</strong> 的 <strong>Search Paths</strong> 中增加 Header 和 Library 的路径：</p><p><img src="`+e+`" alt="路径" loading="lazy"></p><p>然后我们需要在 <strong>Build Phases</strong> 的 <strong>Link Binary With Libraries</strong> 中增加动态链接库。</p><p>我们可以点击左下角加号，选择 <code>Add Others</code> 然后进入 <code>/usr/local/lib</code> 把 OpenCV 相关的库均包含进来即可。</p><blockquote><p>实际上我们可以部分引入，但是由于我们是初步上手，全部引入也可以。</p></blockquote><h4 id="摄像头权限的获取" tabindex="-1">摄像头权限的获取 <a class="header-anchor" href="#摄像头权限的获取" aria-label="Permalink to &quot;摄像头权限的获取&quot;">​</a></h4><p>这里如果我们直接运行我们的程序，在 macOS 最新的系统中是无法运行通过的，这里涉及到摄像头权限问题。</p><p>一般来说，对于 macOS，我们需要在运行程序的目录下声明 <code>info.plist</code>, 这样程序在运行的时候系统会自动有申请权限的弹窗，对于我们测试场景下而言，我们可以这样做：</p><ul><li>进入我们 Product 存放的目录（注意不是项目代码目录，可以在 Products 条目右单击 <code>Show in Finder</code>）</li><li>复制一个 info.plist（这里我们可以随便找一个本地安装的应用程序的 info.plist，一般右单击显示包内容即可看到）</li><li>在 info.plist 中增加 <code>NSCameraUsageDescription</code>，value 即提示语，可以写比如 <code>摄像头权限的获取</code>。</li></ul><h4 id="书写并运行程序" tabindex="-1">书写并运行程序 <a class="header-anchor" href="#书写并运行程序" aria-label="Permalink to &quot;书写并运行程序&quot;">​</a></h4><p>做完上述准备工作后，我们可以写我们的人脸识别程序了，这里给出一个成功运行的代码示例（参考了网上的一些例子）：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include &lt;opencv2/opencv.hpp&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span>using namespace cv;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void capture();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 是否退出摄像头抓取线程</span></span>
<span class="line"><span>static bool g_quit = false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(int argc, char** argv) {</span></span>
<span class="line"><span>    capture();</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void capture()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    // 打开摄像头</span></span>
<span class="line"><span>    cv::VideoCapture cap(0);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 如果打开失败，返回错误</span></span>
<span class="line"><span>    if (!cap.isOpened())</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout&lt;&lt;&quot;Open Capture Failed&quot;&lt;&lt;endl;</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 人脸识别分类器</span></span>
<span class="line"><span>    cv::CascadeClassifier faceCascadeClassifier(&quot;/usr/local/share/opencv4/haarcascades/haarcascade_frontalface_alt2.xml&quot;);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 读取 Frame ，直到退出系统</span></span>
<span class="line"><span>    while (!g_quit)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cv::Mat frame;</span></span>
<span class="line"><span>        if (!cap.read(frame))</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            // 读取失败，返回错误</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 进行人脸识别</span></span>
<span class="line"><span>        std::vector&lt;cv::Rect&gt; faces;</span></span>
<span class="line"><span>        faceCascadeClassifier.detectMultiScale(frame, faces);</span></span>
<span class="line"><span>        // 将人脸识别结果绘制到图片上</span></span>
<span class="line"><span>        for (const auto&amp; face : faces)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            cout&lt;&lt;&quot;Find Face&quot;&lt;&lt;endl;</span></span>
<span class="line"><span>            cv::rectangle(frame,</span></span>
<span class="line"><span>                          cv::Point(face.x, face.y),</span></span>
<span class="line"><span>                          cv::Point(face.x + face.width, face.y + face.height),</span></span>
<span class="line"><span>                          CV_RGB(255, 0, 0),</span></span>
<span class="line"><span>                          2);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        imshow(&quot;Display Image&quot;, frame);</span></span>
<span class="line"><span>        waitKey(100);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><p>这里值得注意的是，我们这里使用的人脸识别分类器是 OpenCV 安装后自带的，你本机的目录可能并不是这一个（这个路径实际上安装好 OpenCV 之后会打印在控制台）。</p><p>正常情况下，以上程序可以直接编译执行。</p>`,28),i=[c];function r(t,b,o,u,d,m){return a(),n("div",null,i)}const g=s(l,[["render",r]]);export{_ as __pageData,g as default};
