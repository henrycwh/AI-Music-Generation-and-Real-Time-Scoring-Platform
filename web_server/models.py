from django.db import models

# Create your models here.
#default : 代表默認值，也就是如果你沒有指定的話會用默認值。
#auto_now_add : 新增時會幚你自動加上建立時間。
#auto_now : 資料有更新時會幚你自動加上更新的時間。

class Music(models.Model):
    song = models.TextField(default="song")
    singer = models.TextField(default="AKB48")
    last_modify_date = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    class Meta:
        db_table = "music"