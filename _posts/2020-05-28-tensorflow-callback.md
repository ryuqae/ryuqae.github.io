---
layout : post
title : TensorFlow Callback Function
author : Jeongwoo
use_math : true
comments : false
---

딥러닝 모델을 학습시킬때 콜백함수를 활용하면 목표성능에 도달했을 때 학습을 정상적으로 완료시킬 수 있다. `tf.keras.callbacks.Callback` 모듈을 상속하는 클래스를 만들고, 학습 완료 조건을 작성한 뒤 추후 `model.fit` 혹은 `model.fit_generator`의 `callbacks=` 인자로 넘겨주면 된다. 간단하게 학습종료 조건 걸기!

```python
class myCallback(tf.keras.callbacks.Callback):
    def on_epoch_end(self, epoch, logs=None):
        if logs is None:
            logs = {}
        if logs.get('accuracy') > 0.99:
            print("\nReached 99% accuracy so cancelling training!")
            self.model.stop_training = True

callbacks = myCallback()
```
