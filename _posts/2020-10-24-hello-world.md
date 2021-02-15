---
layout : post
title : Dictionary의 'Get' 메소드 사용!
author : Jeongwoo
use_math : true
comments : true
---

Dictionary의 'Get' 메소드 사용해보기


```python

from collections import defaultdict

sample_dict = defaultdict()

sorted(sample_dict, key=sample_dict.get, reverse=True)
sorted(sample_dict.items(), key=lambda x:x[1], reverse=True)

# 위 두개는 같은 실행결과를 나타낸다!

```
`inline code`는 이렇게 작성
---
