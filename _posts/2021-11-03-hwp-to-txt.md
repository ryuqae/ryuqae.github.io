---
tags: hwp, txt, preprocessing, text, io, tip
layout: post
title: pyhwp - hwp문서를 txt로 변환하자
author: Jeongwoo
use_math: false
comments: false
---

# hwp문서를 txt로 변환하기

## Code snippet

```python
import os, glob
from pathlib import Path

# hwp5txt 경로 지정
execfile = '/Users/ryuqae/opt/miniconda3/envs/nlp2021/bin/hwp5txt'

for path in Path('./국회회의록_운영위법사위인청/').rglob('*.hwp'):
    output = f"{execfile} --output \"{path.name.strip('.hwp')}.txt\" \"{path}\""
    os.system(output)
```

## Reference

- [[pyhwp] Python3으로 한글(hwp)파일 txt로 변환하기 feat. jupyter notebook (tistory.com)](https://hyyoka-ling-nlp.tistory.com/6)
