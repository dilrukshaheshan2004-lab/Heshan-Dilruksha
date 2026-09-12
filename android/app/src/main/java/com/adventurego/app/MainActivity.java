package com.adventurego.app;
import android.app.Activity;import android.os.Bundle;import android.webkit.WebSettings;import android.webkit.WebView;import android.webkit.WebViewClient;import android.view.Window;import android.graphics.Color;
public class MainActivity extends Activity{
  private WebView web;
  @Override public void onCreate(Bundle b){super.onCreate(b);Window w=getWindow();w.setStatusBarColor(Color.rgb(23,56,43));w.setNavigationBarColor(Color.rgb(23,56,43));web=new WebView(this);web.setBackgroundColor(Color.rgb(245,246,241));web.setWebViewClient(new WebViewClient());WebSettings s=web.getSettings();s.setJavaScriptEnabled(true);s.setDomStorageEnabled(true);s.setDatabaseEnabled(true);s.setAllowFileAccess(true);s.setAllowContentAccess(true);s.setMediaPlaybackRequiresUserGesture(true);web.loadUrl("file:///android_asset/index.html");setContentView(web);}
  @Override public void onBackPressed(){if(web.canGoBack())web.goBack();else super.onBackPressed();}
}
