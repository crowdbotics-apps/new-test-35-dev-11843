# Generated by Django 2.2.16 on 2020-09-28 20:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_vbg1'),
    ]

    operations = [
        migrations.AddField(
            model_name='customtext',
            name='r1',
            field=models.ForeignKey(blank=True, default='123', null=True, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='customtext_r1', to='home.CustomText'),
        ),
    ]
