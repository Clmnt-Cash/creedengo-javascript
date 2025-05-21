package org.greencodeinitiative.creedengo.javascript;

import org.sonar.plugins.javascript.api.JavaScriptCheck;
import org.sonar.plugins.javascript.api.JavaScriptRule;

public class SingleQuoteInsteadQuotationMark {

    public static final String MESSAGE = "Use single quotes instead of double quotes for strings.";
    public static final String RULE_KEY = "SingleQuoteInsteadQuotationMark";
    public static final String REPOSITORY_KEY = "creedengo-javascript";
    public static final String REPOSITORY_NAME = "Creedengo JavaScript Rules";

    public static final String RULE_NAME = "Single Quote Instead Quotation Mark";

    public static final Class<? extends JavaScriptCheck> CHECK_CLASS = SingleQuoteInsteadQuotationMarkCheck.class;

    private SingleQuoteInsteadQuotationMark() {
        // Prevent instantiation
    }
}
