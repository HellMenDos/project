from datetime import datetime
from django.db import models
from ckeditor.fields import RichTextField

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
    photo = models.ImageField(
        upload_to='carousel', blank=True, default='', verbose_name='Задний фон')

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
    files = models.ManyToManyField(Files,related_name="service_files", verbose_name='Прикрепленные файлы')

    def __str__(self):
        return f"{self.title}"

    class Meta:
        verbose_name = 'Наши услуги'
        verbose_name_plural = 'Наши услуги'


class Products(models.Model):
    title = models.CharField(max_length=200, verbose_name='Название продукта')
    describe = RichTextField(default='', verbose_name='Текст описания работы')
    files = models.ManyToManyField(Files,related_name="product_files", verbose_name='Прикрепленные файлы')

    def __str__(self):
        return f"{self.title}"

    class Meta:
        verbose_name = 'Продукты'
        verbose_name_plural = 'Продукты'


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