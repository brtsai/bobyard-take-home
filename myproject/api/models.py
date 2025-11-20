from django.db import models

class Comment(models.Model):
    author = models.CharField(max_length=100, default = "Admin") # hard-coded default
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)  # timestamp

    def __str__(self):
        return f"{self.author}: {self.text[:20]}"

