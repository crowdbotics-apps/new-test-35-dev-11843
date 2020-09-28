# Generated by Django 2.2.16 on 2020-09-28 20:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0005_customtext_r1"),
    ]

    operations = [
        migrations.AlterField(
            model_name="ghhh",
            name="r1",
            field=models.ForeignKey(
                blank=True,
                default="ede",
                null=True,
                on_delete=django.db.models.deletion.SET_DEFAULT,
                related_name="ghhh_r1",
                to="home.CustomText",
            ),
        ),
    ]
