from django.db import models
from social.models import HumanInformation

class Community(models.Model):
    human_information = models.ForeignKey(HumanInformation, on_delete=models.CASCADE)
    post = models.TextField()
    comment = models.TextField()
    like_number = models.IntegerField(default=0)
    like_order = models.IntegerField(default=0, verbose_name='인기수')
    recommendation_order = models.DateTimeField(auto_now_add=True, verbose_name='최신수')

    class Meta:
        ordering = ['-like_order']

    def __str__(self):
        return f"Post: {self.post[:50]}"

    def increase_likes(self):
        self.like_number += 1
        self.save()
