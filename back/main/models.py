from datetime import datetime
import email
from django.db import models
from django.db.models.signals import post_save
from django.core.mail import send_mail
from django.dispatch import receiver
from ckeditor.fields import RichTextField
from django.conf import settings

class MainCarousel(models.Model):
    title = models.CharField(max_length=200, verbose_name='Главный текст')
    describe = models.TextField(verbose_name='Текст описания')
    button_text = models.CharField(max_length=200,blank=True, verbose_name='Текст на кнопке')
    button_url = models.CharField(max_length=300,blank=True, verbose_name='Ссылка на кнопке')
    photo = models.ImageField(
        upload_to='carousel', blank=True, default='', verbose_name='Задний фон')

    def __str__(self):
        return f"{self.title}"

    class Meta:
        verbose_name = 'Первая секция'
        verbose_name_plural = 'Первая секция'


class Files(models.Model):
    title = models.CharField(max_length=200, verbose_name='Описание файла/картинки и тд.')
    photo = models.FileField(
        upload_to='carousel', blank=True, default='', verbose_name='Карнтинка')

    def __str__(self):
        return f"{self.title}"

    class Meta:
        verbose_name = 'Файлы'
        verbose_name_plural = 'Файлы'


class OurWork(models.Model):
    title = models.CharField(max_length=200, verbose_name='Название работы')
    describe = models.TextField(verbose_name='Текст описания работы')
    button_url = models.CharField(max_length=300,blank=True, verbose_name='Ссылка')
    files = models.ManyToManyField(Files,related_name="work_files", verbose_name='Прикрепленные файлы')

    def __str__(self):
        return f"{self.title}"

    class Meta:
        verbose_name = 'Наши работы'
        verbose_name_plural = 'Наши работы'


class OurService(models.Model):
    title = models.CharField(max_length=200, verbose_name='Название работы')
    describe = models.TextField(verbose_name='Текст описания работы')
    button_url = models.CharField(max_length=300,blank=True, verbose_name='Ссылка')
    files = models.ImageField(upload_to='service', blank=True, default='', verbose_name='Картинка')
    def __str__(self):
        return f"{self.title}"

    class Meta:
        verbose_name = 'Наши услуги'
        verbose_name_plural = 'Наши услуги'


class Products(models.Model):
    title = models.CharField(max_length=200, verbose_name='Название продукта')
    sub_title = models.CharField(max_length=200,default='', verbose_name='Мелкое описание')
    describe = RichTextField(default='', verbose_name='Полный текст')
    files = models.ManyToManyField(Files,related_name="product_files",blank=True, verbose_name='Прикрепленные файлы')

    def __str__(self):
        return f"{self.title}"

    class Meta:
        verbose_name = 'Продукты'
        verbose_name_plural = 'Продукты'

class Page(models.Model):
    page_title = models.CharField(max_length=200, verbose_name='Название страницы')
    title = models.CharField(max_length=200,default='', verbose_name='Оглавление')
    describe = RichTextField(default='', verbose_name='Описание страницы')
    files = models.ManyToManyField(Files,related_name="page_files",blank=True, verbose_name='Прикрепленные файлы')
    show = models.BooleanField(default=True, verbose_name='Не показывать в меню')

    def __str__(self):
        return f"{self.page_title}"

    class Meta:
        verbose_name = 'Страницы'
        verbose_name_plural = 'Страницы'


class Support(models.Model):
    name = models.CharField(max_length=200, verbose_name='Имя')
    email = models.CharField(max_length=200, verbose_name='Email')
    phone = models.CharField(max_length=200, verbose_name='Телефон')
    message = models.TextField(max_length=200, verbose_name='Сообщение')
    date = models.DateField(default=datetime.now, verbose_name='Время оставления заявки')
    
    def __str__(self):
        return f"{self.name} {self.date}"

    class Meta:
        verbose_name = 'Клиенты'
        verbose_name_plural = 'Клиенты'

@receiver(post_save, sender=Support)
def support__create(sender, instance, created, **kwargs):
    send_mail(
        f'{instance.name} {instance.phone}',
        f'{instance.message} \n{instance.phone}\n{instance.email}',
        settings.EMAIL_HOST_USER,
        [settings.EMAIL_HOST_USER],
    )