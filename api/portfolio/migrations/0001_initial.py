# Generated by Django 5.0.1 on 2024-09-20 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_name', models.CharField(max_length=45)),
                ('project_techs', models.CharField(max_length=45)),
                ('description', models.CharField(max_length=500)),
                ('has_site_url', models.BooleanField(default=False)),
                ('project_site_url', models.URLField(blank=True)),
                ('project_github_url', models.URLField(blank=True)),
            ],
        ),
    ]
